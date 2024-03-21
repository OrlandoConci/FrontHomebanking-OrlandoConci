export const withAnimation = (Component) => {
    function Animation () {
        return <div className="">
            <Component/>
        </div>
    }

    return Animation
}

