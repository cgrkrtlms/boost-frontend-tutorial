const baseManager = {

    get: async (url) => {

        let list = [];
        await fetch(url)
            .then((data) => data.json())
            .then((res) => {
                list = res;
            });

        return list;

    },

    post: async (url, postData) => {

        let entity = {};

        let requestOptions = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            //js objesini json a çevirir
            body: JSON.stringify(postData)
        }
        await fetch(url, requestOptions)
            .then((data) => data.json())
            .then((res) => {
                entity = res;
            });

        return entity;



    }
}


