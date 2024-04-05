import {
  Search,
  MoreHorizontal,
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
} from "lucide-react";
import { Button } from "../Button";
import { TableData } from "../TableData";
import { TableHead } from "../TableHead";

export function AttendeeList() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="px-3 py-1.5 rounded-lg border border-white/10 bg-transparent text-sm w-72 flex items-center gap-3">
          <Search size={16} className="text-emerald-300" />
          <input
            type="text"
            placeholder="Buscar participante..."
            className="flex-1 bg-transparent outline-none border-0 p-0 focus:!shadow-none"
          />
        </div>
      </div>
      <div className="border border-white/10 rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <TableHead
                style={{ width: 48 }}
                className="py-3 px-4 text-sm font-semibold text-left"
              >
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="size-4 bg-black/20 rounded border-white/10"
                />
              </TableHead>
              <TableHead>Código</TableHead>
              <TableHead>Participante</TableHead>
              <TableHead>Data de inscrição</TableHead>
              <TableHead>Data de check-in</TableHead>
              <th style={{ width: 64 }}></th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 10 }).map((_, idx) => (
              <tr key={idx} className="border-b border-white/10">
                <TableData>
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="size-4 bg-black/20 rounded border-white/10"
                  />
                </TableData>
                <TableData>1234505</TableData>
                <TableData>
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-white">
                      Icaro Vieira
                    </span>
                    <span className="text-zinc-300 text-xs">
                      icaro@icaro.com
                    </span>
                  </div>
                </TableData>
                <TableData>7 dias atrás</TableData>
                <TableData>3 dias atrás</TableData>
                <TableData>
                  <button className="bg-black/20 border border-white/10 rounded-md p-1.5">
                    <MoreHorizontal size={16} />{" "}
                  </button>
                </TableData>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3} className="py-3 px-4 text-sm text-zinc-400">
                Mostrando 10 de 228 items
              </td>
              <td
                colSpan={3}
                className="py-3 px-4 text-sm text-zinc-400 text-right"
              >
                <div className="inline-flex items-center gap-8">
                  <span>Página 1 de 23</span>
                  <div className="flex items-center gap-1.5">
                    <Button>
                      <ChevronsLeft size={16} />
                    </Button>
                    <Button>
                      <ChevronLeft size={16} />
                    </Button>
                    <Button>
                      <ChevronRight size={16} />
                    </Button>
                    <Button>
                      <ChevronsRight size={16} />
                    </Button>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
