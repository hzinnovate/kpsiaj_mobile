export const capitalizeFirstLetter = (string, name) => {
    if (string) {
        const arrayString = typeof string;
        let newObject = [];
        if (arrayString === 'object') {
            for (let i = 0; i < string.length; i++) {
                const element = string[i];
                newObject.push(element.charAt(0).toUpperCase() + element.slice(1) + " ");
            }
            return newObject;
        } else {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    } else {
        toast("error", `${name} Not Found`);
    }
};

export const capitalizeEachFirstLetter = (string) => {
    if (string) {
        let textArray = string.split(" ")
        let text = textArray.map(value => {
            if (value !== "and" && value !== "And") {
                return value.charAt(0).toUpperCase() + value.slice(1);
            } else {
                return value.toLowerCase();
            }
        })

        return text.join(" ")
    }
};
