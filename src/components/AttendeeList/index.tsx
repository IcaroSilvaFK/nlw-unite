import { useEffect, useState } from "react";
import {
  Search,
  MoreHorizontal,
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
} from "lucide-react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/pt-br";

import { IconButton } from "../IconButton";
import { TableData } from "../TableData";
import { TableHeader } from "../TableHeader";
import { Table } from "../Table";
import { useDebounce } from "../../hooks/useDebounce";
import { useSearchParams } from "../../hooks/useSearchParams";
import { usePaginate } from "../../hooks/usePaginate";

dayjs.extend(relativeTime);
dayjs.locale("pt-br");

type Attendees = {
  id: number;
  name: string;
  email: string;
  createdAt: string;
  checkInAt?: string;
};

type Response = {
  attendees: Attendees[];
  quantityPages: number;
  count: number;
  showing: number;
};

export function AttendeeList() {
  const { getSearchParam, pushStateUrl } = useSearchParams();

  const [items, setItems] = useState<Attendees[]>([]);
  const [quantityItems, setQuantityItems] = useState(0);
  const [quantityPages, setQuantityPages] = useState(0);
  const [search, debouncedSearch, onSearch] = useDebounce({
    value: () => {
      return getSearchParam("query") || "";
    },
  });

  const { go, next, page, prev } = usePaginate({
    quantityPages,
  });

  useEffect(() => {
    (async () => {
      const url = new URL(
        "http://localhost:3333/events/9e0e17e6-8b6e-4846-a71d-eabc09a38c2e/attendees"
      );

      url.searchParams.set("pageIndex", `${page - 1}`);

      if (debouncedSearch) {
        url.searchParams.set("query", debouncedSearch);
        pushStateUrl("query", debouncedSearch);
        go(1);
      }

      const response: Response = await (await fetch(url)).json();
      setQuantityPages(response.quantityPages);
      setQuantityItems(response.count);
      setItems(response.attendees);
    })();
  }, [page, debouncedSearch, pushStateUrl, go]);

  return (
    <div className="flex flex-col gap-4" data-testid="attendees">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="px-3 py-1.5 rounded-lg border border-white/10 bg-transparent text-sm w-72 flex items-center gap-3">
          <Search size={16} className="text-emerald-300" />
          <input
            type="text"
            placeholder="Buscar participante..."
            className="flex-1 bg-transparent outline-none border-0 p-0 focus:!shadow-none focus:ring-0"
            onChange={(e) => onSearch(e.currentTarget.value)}
            value={search}
          />
        </div>
      </div>

      <Table>
        <thead>
          <tr className="border-b border-white/10">
            <TableHeader style={{ width: 48 }}>
              <input
                type="checkbox"
                className="size-4 bg-black/20 rounded border-white/10"
              />
            </TableHeader>
            <TableHeader>Código</TableHeader>
            <TableHeader>Participante</TableHeader>
            <TableHeader>Data de inscrição</TableHeader>
            <TableHeader>Data de check-in</TableHeader>
            <th style={{ width: 64 }}></th>
          </tr>
        </thead>
        <tbody>
          {items?.map((item) => (
            <tr
              key={item.id}
              className="border-b border-white/10 hover:bg-slate-100/10 transition"
              data-testid="tablerow"
            >
              <TableData>
                <input
                  type="checkbox"
                  className="size-4 bg-black/20 rounded border-white/10"
                />
              </TableData>
              <TableData>{item.id}</TableData>
              <TableData>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-white">{item.name}</span>
                  <span className="text-zinc-300 text-xs">{item.email}</span>
                </div>
              </TableData>
              <TableData>{dayjs(item.createdAt).fromNow()}</TableData>
              <TableData>
                {item?.checkInAt ? (
                  dayjs(item?.checkInAt).fromNow()
                ) : (
                  <span className="text-zinc-400">Não fez check-in</span>
                )}
              </TableData>
              <TableData>
                <IconButton transparent>
                  <MoreHorizontal size={16} />
                </IconButton>
              </TableData>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <TableData colSpan={3}>
              Mostrando {items.length} de {quantityItems} items
            </TableData>
            <TableData colSpan={3} className="text-right">
              <div className="inline-flex items-center gap-8">
                <span>
                  Página {page} de {quantityPages}
                </span>
                <div className="flex items-center gap-1.5">
                  <IconButton onClick={() => go(1)} disabled={page <= 1}>
                    <ChevronsLeft size={16} />
                  </IconButton>
                  <IconButton onClick={prev} disabled={page <= 1}>
                    <ChevronLeft size={16} />
                  </IconButton>
                  <IconButton onClick={next} disabled={page >= quantityPages}>
                    <ChevronRight size={16} />
                  </IconButton>
                  <IconButton
                    onClick={() => go(quantityPages)}
                    disabled={page >= quantityPages}
                  >
                    <ChevronsRight size={16} />
                  </IconButton>
                </div>
              </div>
            </TableData>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
}
