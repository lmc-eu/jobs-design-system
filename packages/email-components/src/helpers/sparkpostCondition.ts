export const endSparkpostConditionalTag = '{{ end }}';

// Use it in the case when you need to use a custom Sparkpost condition to show or hide content or it is possible that if condition does no exist, content is shown.
export const sparkpostCondition = (content: string, condition?: string) => {
  if (condition) {
    return `
      <mj-raw>${
        condition.search(/\bif\b/) == -1 ? `{{ if ${condition.replace(/{|}/g, '').trim()} }}` : condition
      }</mj-raw>
      ${content}
      <mj-raw>${endSparkpostConditionalTag}</mj-raw>
    `;
  }

  return content;
};

// Use it in the case when you need check if the variable exist and no empty string and use the variable in the content.
export const sparkpostVariableExist = (content: string, sparkpostVariable: string) => {
  const variable = sparkpostVariable.replace(/{|}/g, '').trim();
  return `<mj-raw>{{ if ${variable} and ${variable} != "" }}</mj-raw>
    ${content}
    <mj-raw>${endSparkpostConditionalTag}</mj-raw>
  `;
};
