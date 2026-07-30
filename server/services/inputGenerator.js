// ==========================
// C++ INPUT
// ==========================

export function generateCppInput(type, name, value) {
  type = type.replace("&", "").trim();

  if (type === "int") return `int ${name} = ${value};\n`;

  if (type === "long long") return `long long ${name} = ${value};\n`;

  if (type === "double") return `double ${name} = ${value};\n`;

  if (type === "float") return `float ${name} = ${value};\n`;

  if (type === "bool") return `bool ${name} = ${value ? "true" : "false"};\n`;

  if (type === "char") return `char ${name} = '${value}';\n`;

  if (type === "string") return `string ${name} = "${value}";\n`;

  if (type === "vector<int>")
    return `vector<int> ${name} = ${JSON.stringify(value).replace(/\[/g, "{").replace(/\]/g, "}")};\n`;

  if (type === "vector<long long>")
    return `vector<long long> ${name} = ${JSON.stringify(value).replace(/\[/g, "{").replace(/\]/g, "}")};\n`;

  if (type === "vector<double>")
    return `vector<double> ${name} = ${JSON.stringify(value).replace(/\[/g, "{").replace(/\]/g, "}")};\n`;

  if (type === "vector<string>")
    return `vector<string> ${name} = {${value.map((v) => `"${v}"`).join(",")}};\n`;

  if (type === "vector<char>")
    return `vector<char> ${name} = {${value.map((v) => `'${v}'`).join(",")}};\n`;

  if (type === "vector<vector<int>>")
    return `vector<vector<int>> ${name} = ${JSON.stringify(value).replace(/\[/g, "{").replace(/\]/g, "}")};\n`;

  if (type === "vector<vector<char>>")
    return `vector<vector<char>> ${name} = {${value
      .map((row) => `{${row.map((c) => `'${c}'`).join(",")}}`)
      .join(",")}};\n`;

  return `${type} ${name} = ${value};\n`;
}

// ==========================
// JAVA INPUT
// ==========================

export function generateJavaInput(type, name, value) {
  if (type === "int") return `int ${name} = ${value};\n`;

  if (type === "long") return `long ${name} = ${value};\n`;

  if (type === "double") return `double ${name} = ${value};\n`;

  if (type === "float") return `float ${name} = ${value};\n`;

  if (type === "boolean")
    return `boolean ${name} = ${value ? "true" : "false"};\n`;

  if (type === "char") return `char ${name} = '${value}';\n`;

  if (type === "String") return `String ${name} = "${value}";\n`;

  if (type === "int[]")
    return `int[] ${name} = new int[]{${value.join(",")}};\n`;

  if (type === "long[]")
    return `long[] ${name} = new long[]{${value.join(",")}};\n`;

  if (type === "double[]")
    return `double[] ${name} = new double[]{${value.join(",")}};\n`;

  if (type === "char[]")
    return `char[] ${name} = new char[]{${value.map((c) => `'${c}'`).join(",")}};\n`;

  if (type === "String[]")
    return `String[] ${name} = new String[]{${value.map((s) => `"${s}"`).join(",")}};\n`;

  if (type === "int[][]")
    return `int[][] ${name} = new int[][]{${value
      .map((row) => `{${row.join(",")}}`)
      .join(",")}};\n`;

  if (type === "char[][]")
    return `char[][] ${name} = new char[][]{${value
      .map((row) => `{${row.map((c) => `'${c}'`).join(",")}}`)
      .join(",")}};\n`;

  if (type === "String[][]")
    return `String[][] ${name} = new String[][]{${value
      .map((row) => `{${row.map((s) => `"${s}"`).join(",")}}`)
      .join(",")}};\n`;

  return `${type} ${name} = ${value};\n`;
}

// ==========================
// PYTHON INPUT
// ==========================

export function generatePythonInput(type, name, value) {
  return `${name} = ${JSON.stringify(value)}\n`;
}
