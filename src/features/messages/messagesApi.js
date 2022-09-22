import { apiSlice } from "../API/APISlice";

export const messageApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // endpoints here
    getMessages: builder.query({
      query: ({id,page=1}) =>
        `/messages?conversationId=${id}&_sort=timestamp&_order=desc&_page=${page}&limit=${process.env.REACT_APP_MESSAGES_PER_PAGE}`,
    }),
  }),
});

export const { useGetMessagesQuery } = messageApi;
