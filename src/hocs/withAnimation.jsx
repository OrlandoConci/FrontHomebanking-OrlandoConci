export const withAnimation = (Component) => {
    function Animation () {
        return <div className="transform animate-bounce">
            <Component/>
        </div>
    }

    return Animation
}

