import * as httpRequest from '~/utils/httpRequest';

// API call
export const search = async (q, type = 'less') => {
    try {
        // dùng axios.create để cấu hình baseURL cho file request.js => dùng request.get() không cần truyền full url
        const res = await httpRequest.get('users/search', {
            params: {
                q: q,
                type: type,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
