export function cppValue(value, name) {
  if (Array.isArray(value)) {
    // 2D Array
    if (Array.isArray(value[0])) {
      return `
vector<vector<int>> ${name} = {
${value.map((row) => `{${row.join(",")}}`).join(",")}
};
`;
    }

    // 1D Array

    return `
vector<int> ${name} = {${value.join(",")}};
`;
  }

  if (typeof value === "string") {
    return `
string ${name} = "${value}";
`;
  }

  if (typeof value === "boolean") {
    return `
bool ${name} = ${value};
`;
  }

  return `
int ${name} = ${value};
`;
}
