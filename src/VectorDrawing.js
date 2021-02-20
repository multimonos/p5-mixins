import p5 from "p5"

export { VectorDrawing as default }

const VectorDrawing = p => {
    p.vrect = ( a, b ) => p.rect( a.x, a.y, b.x - a.x, b.y - a.y )
    p.vcircle = size => vec => p.circle( vec.x, vec.y, size )
    p.vtranslate = vec => p.translate( vec.x, vec.y, vec.z )
}