const handleSearch = require('../../helpers/handleSearch');
const {createDictionary} = require('../../helpers/processRestaurants');

const mockQuery1 = {query:{q:'steak',lat:24.927489, lon:60.186110}};
const mockQuery2 = {query:{q:'sushi',lat:24.927489, lon:60.186110}};
const mockQuery3 = {query:{q:'sushi',lat:124.927489, lon:-60.186110}};
const mockQuery4 = {query:{q:'sushi'}};
const mockQuery5 = {query:{q:'sushi', lat:24.927489}};
const mockQuery6 = {query:{}};

createDictionary();


describe('handleSearch', () => {
    it('should return restaurants whose name or tags matches search query', () => {
        const resultObject = handleSearch(mockQuery1).sort(() => Math.random() - 0.5)[0];
        expect(`${resultObject.name}${resultObject.tags.toString()}`).toContain(mockQuery1.query.q);
    });

    it('should return restaurants whose name or tags matches search query', () => {
        const resultObject = handleSearch(mockQuery2).sort(() => Math.random() - 0.5)[0];
        expect(`${resultObject.name}${resultObject.tags.toString()}`).toContain(mockQuery2.query.q);
    });

    it('should not return restaurants when clients location is far away', () => {
        const result = handleSearch(mockQuery3);
        expect(result.length).toEqual(0);
    });
    
    it('should return restaurants when no location is given', () => {
        const result = handleSearch(mockQuery4);
        expect(result.length).toBeGreaterThan(0);
    });

    it('should return restaurants when only lat is given', () => {
        const result = handleSearch(mockQuery5);
        expect(result.length).toBeGreaterThan(0);
    });

    it('should return restaurants when no parameters are given', () => {
        const result = handleSearch(mockQuery6);
        expect(result.length).toBeGreaterThan(0);
    });
});


