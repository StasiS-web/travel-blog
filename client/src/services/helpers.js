export function handleBlur(field, propertyName) {
    const propertyValue = this.state[propertyName];
    propertyValue[field] = true;

    this.setState({ [propertyName]: propertyValue });
}

const getArticlesTitles = articles =>
    articles
    .filter(p => p !== null)
    .map(p => p.title)
    .join(", ");
