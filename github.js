class Github{
    constructor() {
        this.client_id = '435ad3407858fcd95c93';
        this.client_secret = '882e0356f14ce4fe20adb085ea3184b02b80c4ec';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}