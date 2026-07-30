import { generatePythonInput } from "./inputGenerator.js";

const inplaceFunctions = [
  "moveZeroes",
  "reverseString",
  "sortColors",
  "merge",
  "rotate",
  "nextPermutation",
  "removeElement",
  "removeDuplicates",
  "duplicateZeros",
];

export const generatePythonWrapper = (
  userCode,
  functionName,
  testCase,
  problem,
) => {
  let declarations = "";
  let argumentsList = "";

  problem.parameters.python.forEach((param) => {
    const value = testCase.input[param.name];

    declarations += generatePythonInput(param.type, param.name, value);

    argumentsList += `${param.name},`;
  });

  argumentsList = argumentsList.slice(0, -1);

  let outputCode = "";

  if (inplaceFunctions.includes(functionName)) {
    outputCode = `
sol.${functionName}(${argumentsList})

print(${problem.parameters.python[0].name})
`;
  } else {
    outputCode = `
ans = sol.${functionName}(${argumentsList})

if isinstance(ans, bool):
    print(str(ans).lower())
else:
    print(ans)
`;
  }

  return `
${userCode}


${declarations}


sol = Solution()


${outputCode}
`;
};
