import {useGetPetById} from "./__generated__/schema.ts";

function main(){
   const {error, isLoading, data, refetch} = useGetPetById(3, {query: {}});
   if(error){
       return null;
   }
    if(isLoading){
        return 'loading...';
    }

    if(data && data.data.status === 'pending'){
    }

}