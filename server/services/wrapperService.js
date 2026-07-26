function parseFunction(userCode, functionName) {
  const regex = new RegExp(
    `([\\w:<>,&\\s]+)\\s+${functionName}\\s*\\(([^)]*)\\)`,
    "m",
  );

  const match = userCode.match(regex);

  if (!match) {
    throw new Error("Function signature not found");
  }

  const returnType = match[1].trim();

  const parameterString = match[2].trim();

  const parameters = [];

  if (parameterString.length > 0) {
    parameterString.split(",").forEach((param) => {
      const temp = param.trim();

      const lastSpace = temp.lastIndexOf(" ");

      parameters.push({
        type: temp.substring(0, lastSpace).trim(),
        name: temp
          .substring(lastSpace + 1)
          .replace("&", "")
          .trim(),
      });
    });
  }

  return {
    returnType,
    parameters,
  };
}

export const generateCppWrapper = (userCode, functionName, testCase) => {
  const { returnType, parameters } = parseFunction(userCode, functionName);

  let declarations = "";
  let functionArguments = "";

  parameters.forEach((param) => {
    const value = testCase.input[param.name];

    if (param.type.includes("vector<vector<int>>")) {
      declarations += `
vector<vector<int>> ${param.name} = ${JSON.stringify(value)
        .replace(/\[/g, "{")
        .replace(/\]/g, "}")};
`;
    } else if (param.type.includes("vector<int>")) {
      declarations += `
vector<int> ${param.name} = ${JSON.stringify(value)
        .replace(/\[/g, "{")
        .replace(/\]/g, "}")};
`;
    } else if (param.type.includes("string")) {
      declarations += `
string ${param.name} = "${value}";
`;
    } else if (param.type.includes("char")) {
      declarations += `
char ${param.name} = '${value}';
`;
    } else if (param.type.includes("bool")) {
      declarations += `
bool ${param.name} = ${value};
`;
    } else {
      declarations += `
${param.type} ${param.name} = ${value};
`;
    }

    functionArguments += `${param.name},`;
  });

  functionArguments = functionArguments.slice(0, -1);

  let outputCode = "";

  if (returnType.includes("vector<int>")) {
    outputCode = `
auto ans = obj.${functionName}(${functionArguments});

cout<<"[";

for(int i=0;i<ans.size();i++)
{
    cout<<ans[i];

    if(i!=ans.size()-1)
        cout<<",";
}

cout<<"]";
`;
  } else if (returnType.includes("bool")) {
    outputCode = `
auto ans = obj.${functionName}(${functionArguments});

cout<<(ans ? "true" : "false");
`;
  } else if (returnType.includes("void")) {
    outputCode = `
obj.${functionName}(${functionArguments});

cout<<"Done";
`;
  } else {
    outputCode = `
auto ans = obj.${functionName}(${functionArguments});

cout<<ans;
`;
  }

  return `

#include<bits/stdc++.h>
using namespace std;

${userCode}

int main()
{

    Solution obj;

    ${declarations}

    ${outputCode}

    return 0;
}
`;
};
