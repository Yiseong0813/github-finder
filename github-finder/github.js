class Github {
    constructor() {
        this.client_id = '7ae5ea170fe45a4976c3';
        this.client_secret = '92942e6d56b6df18fcc7c7fcf40829d67301ed3a';
        this.repos_count = 5;
        this.repos_sort = 'creater: asc';
    }

    async getUser(user) {
        const profileResponse =
        await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        console.log(profileResponse)
        
        const repoResponse =
        await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos,
        }
    }



}
