const format = (str, ...replacement) => {

    function startsWith(array, key) {
        const matcher = new RegExp(`^${key}`, 'g');
        return array.filter(word => word.match(matcher));
    }


    replacesorStr = str.split(" ")
    const getReplacesor = startsWith(replacesorStr, '%s')

    replacement = [...replacement]

    if (getReplacesor.length !== replacement.length)
        return str

    for (let i = 0; i < getReplacesor.length; i++) {
        str = str.replace("%s", replacement[i])
    }

    return str
}