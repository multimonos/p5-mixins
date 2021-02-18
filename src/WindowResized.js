const WindowResized = p => {
    p.windowResized = e => {
        p.resizeCanvas(p.windowWidth, p.windowHeight)
    }
}
export default WindowResized