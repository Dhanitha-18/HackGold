import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, ArrowUpDown, Eye, FileText, ClipboardList } from 'lucide-react';
import { Card, CardHeader, CardBody } from '../components/common/Card';
import Button from '../components/common/Button';
import { StatusBadge } from '../components/common/StatusBadge';
import EmptyState from '../components/common/EmptyState';
import Modal from '../components/common/Modal';
import { mockValuations } from '../data/mockData';
import { formatINR, formatDate, formatWeight } from '../utils/valuation';
import { useTableFilter } from '../hooks/useApp';

const STATUSES = ['All', 'Completed', 'Pending', 'Under Review', 'Cancelled'];

export default function MyValuations() {
  const navigate = useNavigate();
  const [selectedValuation, setSelectedValuation] = useState(null);

  const {
    filtered,
    searchQuery,
    setSearchQuery,
    statusFilter,
    setStatusFilter,
    sortField,
    sortDir,
    toggleSort,
  } = useTableFilter(mockValuations, ['id', 'jewelleryType', 'status']);

  return (
    <div className="space-y-5 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-800">My Valuations</h1>
          <p className="text-sm text-gray-500 mt-0.5">Your gold valuation history — Sample Demo Data</p>
        </div>
        <Button variant="gold" size="md" icon={ClipboardList} onClick={() => navigate('/sell')}>
          New Valuation
        </Button>
      </div>

      {/* Filters */}
      <Card className="p-4">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search */}
          <div className="relative flex-1">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by ID, jewellery type or status…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-200 rounded-lg bg-white focus:border-[#C9A44C] focus:ring-2 focus:ring-[#C9A44C]/10 outline-none transition-all"
            />
          </div>
          {/* Status filter */}
          <div className="flex gap-2 flex-wrap">
            {STATUSES.map(s => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                  statusFilter === s
                    ? 'bg-[#C9A44C] text-white border-[#C9A44C]'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-[#C9A44C]/50'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </Card>

      {/* Table */}
      <Card>
        <CardBody className="p-0">
          {filtered.length === 0 ? (
            <EmptyState
              icon={ClipboardList}
              title="No valuations found"
              description={searchQuery || statusFilter !== 'All' ? 'Try adjusting your search or filter.' : 'Start your first transparent gold valuation.'}
              actionLabel="Start Valuation"
              onAction={() => navigate('/sell')}
            />
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50/50">
                    {[
                      { key: 'id', label: 'Transaction ID' },
                      { key: 'jewelleryType', label: 'Jewellery' },
                      { key: 'date', label: 'Date' },
                      { key: 'purity', label: 'Purity' },
                      { key: 'estimatedValue', label: 'Est. Value' },
                      { key: 'jewellersOffer', label: "Jeweller's Offer" },
                      { key: 'status', label: 'Status' },
                    ].map(col => (
                      <th
                        key={col.key}
                        className={`text-left text-xs font-semibold text-gray-500 px-4 py-3 cursor-pointer hover:text-gray-700 select-none ${
                          col.key === 'jewellersOffer' ? 'hidden lg:table-cell' : ''
                        }`}
                        onClick={() => toggleSort(col.key)}
                      >
                        <div className="flex items-center gap-1">
                          {col.label}
                          {sortField === col.key && (
                            <ArrowUpDown size={12} className="text-[#C9A44C]" />
                          )}
                        </div>
                      </th>
                    ))}
                    <th className="text-left text-xs font-semibold text-gray-500 px-4 py-3 w-10"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {filtered.map(val => (
                    <tr
                      key={val.id}
                      className="hover:bg-gray-50/50 transition-colors cursor-pointer"
                      onClick={() => setSelectedValuation(val)}
                    >
                      <td className="px-4 py-3.5">
                        <span className="font-mono text-xs font-semibold text-gray-700 bg-gray-100 px-2 py-0.5 rounded">
                          {val.id}
                        </span>
                      </td>
                      <td className="px-4 py-3.5 text-gray-800 font-medium text-xs">{val.jewelleryType}</td>
                      <td className="px-4 py-3.5 text-gray-500 text-xs">{formatDate(val.date)}</td>
                      <td className="px-4 py-3.5">
                        <span className="bg-[#C9A44C]/10 text-[#8B6914] text-xs font-semibold px-2 py-0.5 rounded-full">
                          {val.purity}
                        </span>
                      </td>
                      <td className="px-4 py-3.5 text-gray-800 font-semibold text-xs">{formatINR(val.estimatedValue)}</td>
                      <td className="px-4 py-3.5 text-gray-700 text-xs hidden lg:table-cell">
                        {val.jewellersOffer ? formatINR(val.jewellersOffer) : '—'}
                      </td>
                      <td className="px-4 py-3.5">
                        <StatusBadge status={val.status} />
                      </td>
                      <td className="px-4 py-3.5">
                        <button className="text-[#C9A44C] hover:text-[#b8923a] transition-colors">
                          <Eye size={15} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardBody>
        {filtered.length > 0 && (
          <div className="border-t border-gray-100 px-4 py-3 flex items-center justify-between">
            <p className="text-xs text-gray-500">Showing {filtered.length} of {mockValuations.length} records (Demo Data)</p>
          </div>
        )}
      </Card>

      {/* Detail Modal */}
      <Modal
        isOpen={!!selectedValuation}
        onClose={() => setSelectedValuation(null)}
        title={`Valuation Details — ${selectedValuation?.id}`}
        size="lg"
        footer={
          <>
            <Button variant="outline" size="md" onClick={() => setSelectedValuation(null)}>Close</Button>
            {selectedValuation?.certificateId && (
              <Button variant="gold" size="md" icon={FileText} onClick={() => navigate('/certificates')}>
                View Certificate
              </Button>
            )}
          </>
        }
      >
        {selectedValuation && (
          <div className="space-y-4">
            <div className="bg-amber-50 border border-amber-100 rounded-lg p-3 text-xs text-amber-800">
              ⚠️ This is <strong>sample demo data</strong> and does not represent an actual transaction.
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              {[
                ['Transaction ID', selectedValuation.id],
                ['Jewellery Type', selectedValuation.jewelleryType],
                ['Date', formatDate(selectedValuation.date)],
                ['Gold Purity', selectedValuation.purity],
                ['Gross Weight', formatWeight(selectedValuation.grossWeight)],
                ['Net Gold Weight', formatWeight(selectedValuation.netGoldWeight)],
                ['Reference Rate', `₹${(10000).toLocaleString('en-IN')}/g`],
                ['Testing Method', selectedValuation.testingMethod],
                ['Est. Intrinsic Value', formatINR(selectedValuation.estimatedValue)],
                ["Jeweller's Offer", selectedValuation.jewellersOffer ? formatINR(selectedValuation.jewellersOffer) : 'Pending'],
                ['Status', selectedValuation.status],
                ['Certificate ID', selectedValuation.certificateId || 'Not issued'],
              ].map(([label, val]) => (
                <div key={label}>
                  <p className="text-xs text-gray-500 mb-0.5">{label}</p>
                  <p className="text-sm font-semibold text-gray-800">{val}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
