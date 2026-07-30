// =======================
// C++ OUTPUT
// =======================

export function cppSerializer(returnType, variable = "ans") {
  if (returnType === "void") return "";

  if (returnType === "int") return `cout << ${variable};`;

  if (returnType === "long long") return `cout << ${variable};`;

  if (returnType === "double") return `cout << ${variable};`;

  if (returnType === "bool") return `cout << (${variable} ? "true" : "false");`;

  if (returnType === "string") return `cout << ${variable};`;

  if (returnType === "char") return `cout << ${variable};`;

  if (returnType === "vector<int>")
    return `
cout << "[";
for(int i=0;i<${variable}.size();i++){
    cout<<${variable}[i];
    if(i!=${variable}.size()-1) cout<<",";
}
cout<<"]";
`;

  if (returnType === "vector<vector<int>>")
    return `
cout<<"[";
for(int i=0;i<${variable}.size();i++){
    cout<<"[";
    for(int j=0;j<${variable}[i].size();j++){
        cout<<${variable}[i][j];
        if(j!=${variable}[i].size()-1) cout<<",";
    }
    cout<<"]";
    if(i!=${variable}.size()-1) cout<<",";
}
cout<<"]";
`;

  return `cout << ${variable};`;
}

// =======================
// JAVA OUTPUT
// =======================

export function javaSerializer(returnType) {
  if (returnType === "void") return "";

  if (returnType === "int[]")
    return `
System.out.print(Arrays.toString(ans).replace(" ",""));
`;

  if (returnType === "int[][]")
    return `
System.out.print(Arrays.deepToString(ans).replace(" ",""));
`;

  return `
System.out.print(ans);
`;
}

// =======================
// PYTHON OUTPUT
// =======================

export function pythonSerializer() {
  return `
print(ans)
`;
}
