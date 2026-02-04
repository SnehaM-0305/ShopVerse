class APIFilters{
    constructor(query,queryStr){
        this.query = query ;
        this.queryStr=queryStr;
    }

    search(){
        const keyword = this.queryStr.keyword? {
            name:{
                //mongoose keywords = regex and options 
                //does not exactly match the name
                $regex :this.queryStr.keyword,
                //makes its case insensitive
                $options:'i'
            }
        } :{};
        this.query = this.query.find({...keyword})
        return this ; 

    }

    //Filter products 
    filters(){
        const queryCopy = {...this.queryStr};
        //remove keyword as already handled in Search
        //fields to be removed ->array 
        const fieldsToRemove = ['keyword'] ; 
         fieldsToRemove.forEach((el) => delete queryCopy[el])
        // Advance filters for range , price etc 
        let queryStr = JSON.stringify(queryCopy);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g , (match)=>`$${match}`)
        this.query= this.query.find(JSON.parse(queryStr))
        return this ;

    }
}

export default APIFilters ; 