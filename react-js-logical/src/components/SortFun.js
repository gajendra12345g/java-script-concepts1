import moment from "moment"
export const SortFun = (sortData, sortBy, sortType, isDate, format) => {
    if (!!sortData?.length) {
        const data = [...sortData]
        const fomt = format ?? ""
      return  data.sort((a, b) => {
            const aNext = isDate ? moment(a[sortBy], fomt) : a[sortBy]
            const bPrev = isDate ? moment(b[sortBy], fomt) : b[sortBy]
            if (sortType === "desc") {
                if (aNext > bPrev) {
                    return -1;
                }
                if (aNext < bPrev) {
                    return 1;
                }
                return 0;
            }
            else {
                if (aNext > bPrev) {
                    return 1;
                }
                if (aNext < bPrev) {
                    return -1;
                } return 0;
            }
        })

    }
}