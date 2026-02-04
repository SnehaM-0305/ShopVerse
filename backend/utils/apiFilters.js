class APIFilters{
    constructor(query,queryStr){
        this.query = query ;
        this.queryStr=queryStr;
    }

    search(){
        const keyword = this.queryStr.keyword? {
            name:{
                //does not exactly match the name
                $regex :this.queryStr.keyword,
                //makes its case insensitive
                $options:'i'
            }
        } :{};
        this.query = this.query.find({...keyword})
        return this ; 

    }
}

export default APIFilters ; 