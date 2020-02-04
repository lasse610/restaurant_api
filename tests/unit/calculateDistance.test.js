const calculateDistance = require('../../helpers/calculateDistance')


describe('calculateDistance', () => {
    it('should return correct distance', () => {
        //Distance between Helsinki and New York
        const result = calculateDistance([-73.935242,40.730610],[24.945831,60.192059])
        expect(result).toBeCloseTo(6614,-1)
    })

    it('should return correct distance', () => {
        //Distance between London and HongKong
        const result = calculateDistance([-0.118092,51.509865],[114.149139,22.286394])
        expect(result).toBeCloseTo(9622,-1)
    })

    it('should return correct distance', () => {
        // distance between north and south ends of the olympic stadion in Helsinki
        const result = calculateDistance([24.926837,60.187747],[ 24.927489,60.186110] )
        expect(result).toBeCloseTo(0.2,1)
    })

    it('should be a number', () => {
        const result = calculateDistance([24.926837,60.187747],[ 24.927489,60.186110])
        expect(typeof result).toBe('number')
    })
})