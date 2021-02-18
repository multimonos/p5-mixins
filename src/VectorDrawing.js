import p5 from "p5"

export { VectorDrawing as default }

const VectorDrawing = p => {
    p.vrect = ( a, b ) => p.rect( a.x, a.y, b.x - a.x, b.y - a.y )
    p.vcircle = a => size => p.circle( a.x, a.y, size )
    p.vtranslate = a => p.translate( a.x, a.y )
    p.vadd = ( a, b ) => p5.Vector.add( a, b )
    p.vcopy = a => a.copy()
    p.vmult = ( a, b ) => p5.Vector.mult( a, b )
    p.vzero = () => new p5.Vector( 0, 0, 0 )
    p.vnull = () => p.vzero()
    p.vi2 = () => new p5.Vector( 1, 1, 0 )
    p.vi3 = () => new p5.Vector( 1, 1, 1 )
    p.vcreate = ( ...args ) => new p5.Vector( ...args )
}