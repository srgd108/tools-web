/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * OpenAPI definition
 * OpenAPI spec version: v0
 */
import axios from 'axios'
import type {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'
import {
  useMutation,
  useQuery
} from 'react-query'
import type {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult
} from 'react-query'
import type {
  MongoTools,
  Tools,
  ToolsResponse
} from '.././model'



export const getData = (
     options?: AxiosRequestConfig
 ): Promise<AxiosResponse<Tools[]>> => {
    
    return axios.get(
      `http://localhost:8080/tools`,options
    );
  }


export const getGetDataQueryKey = () => {
    return [`http://localhost:8080/tools`] as const;
    }

    
export const getGetDataQueryOptions = <TData = Awaited<ReturnType<typeof getData>>, TError = AxiosError<unknown>>( options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getData>>, TError, TData>, axios?: AxiosRequestConfig}
) => {

const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetDataQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getData>>> = ({ signal }) => getData({ signal, ...axiosOptions });

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getData>>, TError, TData> & { queryKey: QueryKey }
}

export type GetDataQueryResult = NonNullable<Awaited<ReturnType<typeof getData>>>
export type GetDataQueryError = AxiosError<unknown>

export const useGetData = <TData = Awaited<ReturnType<typeof getData>>, TError = AxiosError<unknown>>(
  options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getData>>, TError, TData>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetDataQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const setData = (
    tools: Tools, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<ToolsResponse>> => {
    
    return axios.post(
      `http://localhost:8080/tools`,
      tools,options
    );
  }



export const getSetDataMutationOptions = <TError = AxiosError<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof setData>>, TError,{data: Tools}, TContext>, axios?: AxiosRequestConfig}
): UseMutationOptions<Awaited<ReturnType<typeof setData>>, TError,{data: Tools}, TContext> => {
const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof setData>>, {data: Tools}> = (props) => {
          const {data} = props ?? {};

          return  setData(data,axiosOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type SetDataMutationResult = NonNullable<Awaited<ReturnType<typeof setData>>>
    export type SetDataMutationBody = Tools
    export type SetDataMutationError = AxiosError<unknown>

    export const useSetData = <TError = AxiosError<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof setData>>, TError,{data: Tools}, TContext>, axios?: AxiosRequestConfig}
): UseMutationResult<
        Awaited<ReturnType<typeof setData>>,
        TError,
        {data: Tools},
        TContext
      > => {

      const mutationOptions = getSetDataMutationOptions(options);

      return useMutation(mutationOptions);
    }
    export const getMongoData = (
     options?: AxiosRequestConfig
 ): Promise<AxiosResponse<MongoTools[]>> => {
    
    return axios.get(
      `http://localhost:8080/tools/mongo`,options
    );
  }


export const getGetMongoDataQueryKey = () => {
    return [`http://localhost:8080/tools/mongo`] as const;
    }

    
export const getGetMongoDataQueryOptions = <TData = Awaited<ReturnType<typeof getMongoData>>, TError = AxiosError<unknown>>( options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getMongoData>>, TError, TData>, axios?: AxiosRequestConfig}
) => {

const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetMongoDataQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getMongoData>>> = ({ signal }) => getMongoData({ signal, ...axiosOptions });

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getMongoData>>, TError, TData> & { queryKey: QueryKey }
}

export type GetMongoDataQueryResult = NonNullable<Awaited<ReturnType<typeof getMongoData>>>
export type GetMongoDataQueryError = AxiosError<unknown>

export const useGetMongoData = <TData = Awaited<ReturnType<typeof getMongoData>>, TError = AxiosError<unknown>>(
  options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getMongoData>>, TError, TData>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetMongoDataQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const setMongoData = (
    mongoTools: MongoTools, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<MongoTools>> => {
    
    return axios.post(
      `http://localhost:8080/tools/mongo`,
      mongoTools,options
    );
  }



export const getSetMongoDataMutationOptions = <TError = AxiosError<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof setMongoData>>, TError,{data: MongoTools}, TContext>, axios?: AxiosRequestConfig}
): UseMutationOptions<Awaited<ReturnType<typeof setMongoData>>, TError,{data: MongoTools}, TContext> => {
const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof setMongoData>>, {data: MongoTools}> = (props) => {
          const {data} = props ?? {};

          return  setMongoData(data,axiosOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type SetMongoDataMutationResult = NonNullable<Awaited<ReturnType<typeof setMongoData>>>
    export type SetMongoDataMutationBody = MongoTools
    export type SetMongoDataMutationError = AxiosError<unknown>

    export const useSetMongoData = <TError = AxiosError<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof setMongoData>>, TError,{data: MongoTools}, TContext>, axios?: AxiosRequestConfig}
): UseMutationResult<
        Awaited<ReturnType<typeof setMongoData>>,
        TError,
        {data: MongoTools},
        TContext
      > => {

      const mutationOptions = getSetMongoDataMutationOptions(options);

      return useMutation(mutationOptions);
    }
    export const getData1 = (
    id: number, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<Tools>> => {
    
    return axios.get(
      `http://localhost:8080/tools/${id}`,options
    );
  }


export const getGetData1QueryKey = (id: number,) => {
    return [`http://localhost:8080/tools/${id}`] as const;
    }

    
export const getGetData1QueryOptions = <TData = Awaited<ReturnType<typeof getData1>>, TError = AxiosError<unknown>>(id: number, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getData1>>, TError, TData>, axios?: AxiosRequestConfig}
) => {

const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetData1QueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getData1>>> = ({ signal }) => getData1(id, { signal, ...axiosOptions });

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getData1>>, TError, TData> & { queryKey: QueryKey }
}

export type GetData1QueryResult = NonNullable<Awaited<ReturnType<typeof getData1>>>
export type GetData1QueryError = AxiosError<unknown>

export const useGetData1 = <TData = Awaited<ReturnType<typeof getData1>>, TError = AxiosError<unknown>>(
 id: number, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getData1>>, TError, TData>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetData1QueryOptions(id,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const deleteData = (
    id: number, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<void>> => {
    
    return axios.delete(
      `http://localhost:8080/tools/${id}`,options
    );
  }



export const getDeleteDataMutationOptions = <TError = AxiosError<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteData>>, TError,{id: number}, TContext>, axios?: AxiosRequestConfig}
): UseMutationOptions<Awaited<ReturnType<typeof deleteData>>, TError,{id: number}, TContext> => {
const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteData>>, {id: number}> = (props) => {
          const {id} = props ?? {};

          return  deleteData(id,axiosOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DeleteDataMutationResult = NonNullable<Awaited<ReturnType<typeof deleteData>>>
    
    export type DeleteDataMutationError = AxiosError<unknown>

    export const useDeleteData = <TError = AxiosError<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteData>>, TError,{id: number}, TContext>, axios?: AxiosRequestConfig}
): UseMutationResult<
        Awaited<ReturnType<typeof deleteData>>,
        TError,
        {id: number},
        TContext
      > => {

      const mutationOptions = getDeleteDataMutationOptions(options);

      return useMutation(mutationOptions);
    }
    export const getData2 = (
    id: string, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<MongoTools>> => {
    
    return axios.get(
      `http://localhost:8080/tools/mongo/${id}`,options
    );
  }


export const getGetData2QueryKey = (id: string,) => {
    return [`http://localhost:8080/tools/mongo/${id}`] as const;
    }

    
export const getGetData2QueryOptions = <TData = Awaited<ReturnType<typeof getData2>>, TError = AxiosError<unknown>>(id: string, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getData2>>, TError, TData>, axios?: AxiosRequestConfig}
) => {

const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetData2QueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getData2>>> = ({ signal }) => getData2(id, { signal, ...axiosOptions });

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getData2>>, TError, TData> & { queryKey: QueryKey }
}

export type GetData2QueryResult = NonNullable<Awaited<ReturnType<typeof getData2>>>
export type GetData2QueryError = AxiosError<unknown>

export const useGetData2 = <TData = Awaited<ReturnType<typeof getData2>>, TError = AxiosError<unknown>>(
 id: string, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getData2>>, TError, TData>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetData2QueryOptions(id,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const deleteData1 = (
    id: string, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<void>> => {
    
    return axios.delete(
      `http://localhost:8080/tools/mongo/${id}`,options
    );
  }



export const getDeleteData1MutationOptions = <TError = AxiosError<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteData1>>, TError,{id: string}, TContext>, axios?: AxiosRequestConfig}
): UseMutationOptions<Awaited<ReturnType<typeof deleteData1>>, TError,{id: string}, TContext> => {
const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteData1>>, {id: string}> = (props) => {
          const {id} = props ?? {};

          return  deleteData1(id,axiosOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DeleteData1MutationResult = NonNullable<Awaited<ReturnType<typeof deleteData1>>>
    
    export type DeleteData1MutationError = AxiosError<unknown>

    export const useDeleteData1 = <TError = AxiosError<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteData1>>, TError,{id: string}, TContext>, axios?: AxiosRequestConfig}
): UseMutationResult<
        Awaited<ReturnType<typeof deleteData1>>,
        TError,
        {id: string},
        TContext
      > => {

      const mutationOptions = getDeleteData1MutationOptions(options);

      return useMutation(mutationOptions);
    }
    