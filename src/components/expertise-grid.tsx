import {
  BarChart3,
  Database,
  SearchCheck,
  ShieldCheck,
  TrendingUp,
  UsersRound,
} from "lucide-react";
import { expertise } from "@/data/content";

const icons = {
  chart: BarChart3,
  trend: TrendingUp,
  search: SearchCheck,
  database: Database,
  shield: ShieldCheck,
  people: UsersRound,
} as const;

export function ExpertiseGrid() {
  return (
    <div className="expertise-grid">
      {expertise.map((item, index) => {
        const Icon = icons[item.icon];
        return (
          <article className="expertise-card" key={item.title}>
            <div className="expertise-card-top">
              <span className="icon-tile">
                <Icon size={20} strokeWidth={1.7} aria-hidden="true" />
              </span>
              <span className="card-index">0{index + 1}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        );
      })}
    </div>
  );
}
