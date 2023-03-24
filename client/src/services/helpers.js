export const handleBlur = (field, propertyName) => {
    const propertyValue = this.state[propertyName];
    propertyValue[field] = true;

    this.setState({ [propertyName]: propertyValue });
}

