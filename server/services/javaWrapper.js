import { generateJavaInput } from "./inputGenerator.js";
import { javaSerializer } from "./serializer.js";

export const generateJavaWrapper = (
  userCode,
  functionName,
  testCase,
  problem,
) => {
  console.log("========== JAVA DEBUG ==========");
  console.log("Function:", functionName);
  console.log("Return Type:", problem.returnType);
  console.log("Parameters:", problem.parameters);
  let declarations = "";
  let argumentsList = "";

  problem.parameters.java.forEach((param) => {
    const value = testCase.input[param.name];

    declarations += generateJavaInput(param.type, param.name, value);

    argumentsList += `${param.name},`;
  });

  argumentsList = argumentsList.slice(0, -1);

  let outputCode = "";

  if (problem.returnType.java === "void") {
    outputCode = `
obj.${functionName}(${argumentsList});

System.out.print(Arrays.toString(${problem.parameters.java[0].name}).replace(" ",""));
`;
  } else {
    outputCode = `
${problem.returnType.java} ans = obj.${functionName}(${argumentsList});

${javaSerializer(problem.returnType.java)}
`;
  }

  const wrapper = `
import java.util.*;

${userCode}

public class Main {

    public static void main(String[] args) {

        ${declarations}

        Solution obj = new Solution();

      ${outputCode}
      

    }
}
`;

  console.log("========== JAVA WRAPPER ==========");
  console.log(wrapper);

  return wrapper;
};
