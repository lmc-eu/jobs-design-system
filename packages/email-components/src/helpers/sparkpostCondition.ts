export const endSparkpostConditionalTag = '{{ end }}';

// Use it in the case when you need to use a custom Sparkpost condition to show or hide content or it is possible that if condition does no exist, content is shown.
export const sparkpostCondition = (content: any, condition?: string) => {
  return `
    ${condition && `<mj-raw>{{ if ${condition} }}</mj-raw>`}
    ${content}
    ${condition && `<mj-raw>${endSparkpostConditionalTag}</mj-raw>`}
  `;
};

// Use it in the case when you need check if the variable exist and no empty string and use the variable in the content.
export const sparkpostVariableExist = (content: any, variable?: string) => {
  return `<mj-raw>{{ if ${variable} and ${variable} != "" }}</mj-raw>
    ${content}
    <mj-raw>${endSparkpostConditionalTag}</mj-raw>
  `;
};
