const map = (args) => {
    const options = {}
    return args.reduce((acc, arg, i) => {
        if(arg == null) return acc
        if(arg.toString().length == 0) return acc
        if (arg.toString().startsWith('--')) {
            const optionName = arg.slice(2)
            if (acc[optionName]) {
                if (!Array.isArray(acc[optionName])) {
                    acc[optionName] = [acc[optionName]]
                }
                acc[optionName].push(args[i+1])
                return acc
            }
            
            if (!args[i+1]) {
                acc[optionName] = true
                return acc
            }

            acc[optionName] = args[i+1]?.toString().indexOf('--') > -1 ? true : args[i+1]
        }
        return acc
    }, options)
}
module.exports = map