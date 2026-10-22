import { useEffect, useRef } from "react"
const areEqual = (previousdeps, nextdeps) => {
    if (previousdeps === null) return false
    if (previousdeps.length !== nextdeps.length) return false
    for (let i = 0; i < previousdeps.length; i++) {
        if (previousdeps[i] !== nextdeps[i]) {
            return false

        }
    }
    return true

}

const UseCutomMemo = (cb, deps) => {
    //variable or state=cached value
    const memorizedref = useRef(null)
    //changes in deps
    if (!memorizedref.current || !areEqual(memorizedref.current.deps, deps)) {
        memorizedref.current = {
            value: cb(),
            deps

        }
    }
    //clean up logic
    useEffect(() => {
        return () => {
            memorizedref.current = null
        }
    }, [])
    return memorizedref.current.value
}