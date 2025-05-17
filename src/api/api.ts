const BASE_URL = "https://api.jikan.moe/v4";

let requestQueue: (() => void)[] = [];
let activeRequests = 0;
const MAX_REQUESTS_PER_SECOND = 3;
// const MAX_REQUESTS_PER_MINUTE = 60;

function processQueue() {
    if (requestQueue.length > 0 && activeRequests < MAX_REQUESTS_PER_SECOND) {
        const nextRequest = requestQueue.shift();
        if (nextRequest) {
            activeRequests++;
            nextRequest();
            setTimeout(() => {
                activeRequests--;
                processQueue();
            }, 1000 / MAX_REQUESTS_PER_SECOND);
        }
    }
}

export const api = {
    get: async <T>(endpoint: string, options: RequestInit = {}): Promise<T> => {
        return new Promise((resolve, reject) => {
            const executeRequest = async () => {
                try {
                    const response = await fetch(`${BASE_URL}${endpoint}`, {
                        method: 'GET',
                        ...options,
                    });
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const data = await response.json();
                    resolve(data as T);
                } catch (error) {
                    reject(error);
                }
            };
            requestQueue.push(executeRequest);
            processQueue();
        });
    },
};