import React, { useState } from 'react';
import { TripOption } from '../types/travel';
import { 
  Wallet, 
  AlertCircle, 
  ArrowDownRight, 
  Building, 
  Train, 
  Utensils, 
  Ticket, 
  ShoppingBag, 
  Bus, 
  Sparkles,
  CheckCircle2,
  TrendingDown
} from 'lucide-react';

interface BudgetPlannerProps {
  trip: TripOption;
  targetBudget?: number;
  travelersCount?: number;
  onApplySavings?: (suggestion: string) => void;
}

export const BudgetPlanner: React.FC<BudgetPlannerProps> = ({
  trip,
  targetBudget = 3500,
  travelersCount = 2,
  onApplySavings
}) => {
  const breakdown = trip.budgetBreakdown;
  const total = trip.totalEstimatedCost;
  const costPerPerson = Math.round(total / (travelersCount || 1));
  const costPerDay = Math.round(total / (trip.daysCount || 1));
  const bookedAmount = breakdown.hotel + breakdown.transport; // Fixed committed bookings
  const remainingBudget = targetBudget - total;
  const isOverBudget = total > targetBudget;

  const categories = [
    { name: 'Hotels & Lodging', amount: breakdown.hotel, icon: Building, color: 'bg-blue-600', text: 'text-blue-600' },
    { name: 'Intercity Transport', amount: breakdown.transport, icon: Train, color: 'bg-purple-600', text: 'text-purple-600' },
    { name: 'Food & Dining', amount: breakdown.food, icon: Utensils, color: 'bg-emerald-600', text: 'text-emerald-600' },
    { name: 'Activities & Entry Fees', amount: breakdown.activities, icon: Ticket, color: 'bg-amber-500', text: 'text-amber-500' },
    { name: 'Local Transit / Cabs', amount: breakdown.localTransit, icon: Bus, color: 'bg-indigo-500', text: 'text-indigo-500' },
    { name: 'Shopping & Gifts', amount: breakdown.shopping, icon: ShoppingBag, color: 'bg-rose-500', text: 'text-rose-500' },
    { name: 'Miscellaneous & Tips', amount: breakdown.misc, icon: Wallet, color: 'bg-neutral-500', text: 'text-neutral-500' }
  ];

  return (
    <div className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-100 pb-5">
        <div>
          <div className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider flex items-center gap-1.5 mb-1">
            <Wallet className="w-3.5 h-3.5 text-neutral-400" />
            <span>Interactive Trip Budget Planner</span>
          </div>
          <h3 className="text-xl font-bold text-neutral-900 font-display">
            Cost Breakdown & Financial Health
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-3.5 py-1.5 bg-neutral-50 rounded-xl border border-neutral-200/80 text-right">
            <div className="text-[10px] uppercase font-bold text-neutral-500">Per Person</div>
            <div className="text-sm font-bold text-neutral-900 tabular-nums">${costPerPerson}</div>
          </div>
          <div className="px-3.5 py-1.5 bg-neutral-50 rounded-xl border border-neutral-200/80 text-right">
            <div className="text-[10px] uppercase font-bold text-neutral-500">Per Day</div>
            <div className="text-sm font-bold text-neutral-900 tabular-nums">${costPerDay}</div>
          </div>
        </div>
      </div>

      {/* Primary Budget Gauges */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200/80">
          <div className="text-xs font-semibold text-neutral-500">Total Estimated Cost</div>
          <div className="text-2xl font-black text-neutral-900 mt-1 tabular-nums">
            ${total.toLocaleString()}
          </div>
          <div className="text-[11px] text-neutral-500 mt-1">
            Target Budget: ${targetBudget.toLocaleString()}
          </div>
        </div>

        <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200/80">
          <div className="text-xs font-semibold text-neutral-500">Committed Stays & Transit</div>
          <div className="text-2xl font-black text-blue-900 mt-1 tabular-nums">
            ${bookedAmount.toLocaleString()}
          </div>
          <div className="text-[11px] text-blue-600 font-medium mt-1">
            {Math.round((bookedAmount / total) * 100)}% of total trip cost
          </div>
        </div>

        <div className={`p-4 rounded-xl border ${
          isOverBudget 
            ? 'bg-rose-50/70 border-rose-200 text-rose-900' 
            : 'bg-emerald-50/70 border-emerald-200 text-emerald-900'
        }`}>
          <div className="text-xs font-semibold">
            {isOverBudget ? 'Budget Deficit' : 'Remaining Cushion'}
          </div>
          <div className="text-2xl font-black mt-1 tabular-nums">
            {isOverBudget ? `-$${Math.abs(remainingBudget).toLocaleString()}` : `+$${remainingBudget.toLocaleString()}`}
          </div>
          <div className="text-[11px] font-medium mt-1">
            {isOverBudget ? 'Exceeds target budget limit' : 'Under target budget limit'}
          </div>
        </div>
      </div>

      {/* Visual Stacked Progress Bar */}
      <div>
        <div className="flex items-center justify-between text-xs font-semibold text-neutral-700 mb-2">
          <span>Expense Distribution</span>
          <span className="text-neutral-500 tabular-nums">100% of ${total.toLocaleString()}</span>
        </div>
        <div className="h-3 w-full bg-neutral-100 rounded-full overflow-hidden flex shadow-inner">
          {categories.map((c) => {
            const pct = Math.max(1, (c.amount / total) * 100);
            return (
              <div
                key={c.name}
                style={{ width: `${pct}%` }}
                className={`${c.color} h-full transition-all duration-300 relative group`}
                title={`${c.name}: $${c.amount} (${Math.round(pct)}%)`}
              />
            );
          })}
        </div>
      </div>

      {/* Category Line Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {categories.map((c) => {
          const Icon = c.icon;
          const pct = Math.round((c.amount / total) * 100);
          return (
            <div
              key={c.name}
              className="p-3 bg-neutral-50/60 rounded-xl border border-neutral-100 flex items-center justify-between"
            >
              <div className="flex items-center gap-2.5">
                <div className={`p-2 rounded-lg bg-white border border-neutral-200/80 ${c.text}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-neutral-800">{c.name}</div>
                  <div className="text-[11px] text-neutral-400">{pct}% of total</div>
                </div>
              </div>
              <div className="text-sm font-bold text-neutral-900 tabular-nums">
                ${c.amount.toLocaleString()}
              </div>
            </div>
          );
        })}
      </div>

      {/* Over-Budget / Optimization Recommendations */}
      {isOverBudget && (
        <div className="p-4 bg-amber-50/80 border border-amber-200 rounded-xl space-y-3">
          <div className="flex items-center gap-2 text-amber-900 font-bold text-xs">
            <AlertCircle className="w-4 h-4 text-amber-600" />
            <span>AI Cost Optimization Opportunities Detected</span>
          </div>
          <p className="text-xs text-amber-800 leading-relaxed">
            You are currently ${Math.abs(remainingBudget)} over your target. Here are 3 instant adjustments to align with your budget:
          </p>

          <div className="space-y-2">
            <div className="p-2.5 bg-white/90 rounded-lg border border-amber-200/80 flex items-center justify-between text-xs">
              <span className="text-neutral-700">
                Switch stay to a boutique 4-star room near city metro
              </span>
              <span className="font-bold text-emerald-700 flex items-center gap-1">
                <TrendingDown className="w-3.5 h-3.5" /> Save ~$180/stay
              </span>
            </div>

            <div className="p-2.5 bg-white/90 rounded-lg border border-amber-200/80 flex items-center justify-between text-xs">
              <span className="text-neutral-700">
                Choose regional express rail instead of private car transfer
              </span>
              <span className="font-bold text-emerald-700 flex items-center gap-1">
                <TrendingDown className="w-3.5 h-3.5" /> Save ~$110/pax
              </span>
            </div>

            <div className="p-2.5 bg-white/90 rounded-lg border border-amber-200/80 flex items-center justify-between text-xs">
              <span className="text-neutral-700">
                Focus on street food arcades & casual izakayas for weekday lunches
              </span>
              <span className="font-bold text-emerald-700 flex items-center gap-1">
                <TrendingDown className="w-3.5 h-3.5" /> Save ~$40/day
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
