/**
 * @Description	：index.ts
 * @Author     	: sagit_zhx
 * @Date       	: 2023-01-20 星期五 22:54:14
 * @FilePath	: jira/src/hook/index.ts
 */
import { useEffect, useRef, useState } from "react";

export { useUrlQueryParam, useProjectModal } from "./use-url";
export { useDocumentTitle } from "./use-document-title";
export { useUsers } from "./use-users";
export { useProjects } from "./use-projects";
export { useAsync } from "./use-async";
export const useMount = (cb: Function) => {
  useEffect(() => {
    cb();
  }, []);
};

export const useDebounce = <V>(value: V, delay = 0): V => {
  const [useValue, setUseValue] = useState<V>(value);
  useEffect(() => {
    const timerId = globalThis.setTimeout(() => setUseValue(value), delay);

    return () => globalThis.clearTimeout(timerId);
  }, [value, delay]);

  return useValue;
};

/**
 * 返回组件的挂载状态
 */
export const useMountedRef = () => {
  const mountedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;

    return () => {
      mountedRef.current = false;
    };
  });

  return mountedRef;
};
