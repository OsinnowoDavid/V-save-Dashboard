import React from 'react';
import { Wallet, ArrowDownToLine, Smartphone, Receipt, TrendingUp, CreditCard } from 'lucide-react';

const Dashboard = () => {
  const statsRow1 = [
    {
      id: 1,
      icon: Wallet,
      iconBg: 'rgba(93, 135, 239, 0.17)',
      iconColor: '#5D87EF',
      label: 'Total Wallet Funding',
      value: 'N125,116,980',
      details: [
        { label: 'Online:', value: 'N123,777,000' },
        { label: 'Offline:', value: 'N123,777,000' }
      ]
    },
    {
      id: 2,
      icon: ArrowDownToLine,
      iconBg: 'rgba(93, 135, 239, 0.17)',
      iconColor: '#5D87EF',
      label: 'Total Withdrawal',
      value: 'N125,116,980',
      details: [
        { label: 'Online:', value: 'N123,777,000' },
        { label: 'Offline:', value: 'N123,777,000' }
      ]
    },
    {
      id: 3,
      icon: Smartphone,
      iconBg: 'rgba(93, 135, 239, 0.17)',
      iconColor: '#5D87EF',
      label: 'Airtime & Data Volume',
      value: 'N125,116,980',
      details: [
        { label: 'Airtime:', value: 'N123,777,000' },
        { label: 'Data:', value: 'N123,777,000' }
      ]
    },
  ];

  const statsRow2 = [
    {
      id: 4,
      icon: Receipt,
      iconBg: 'rgba(93, 135, 239, 0.17)',
      iconColor: '#5D87EF',
      label: 'Stamp Duty Revenue',
      value: 'N50',
      details: []
    },
    {
      id: 5,
      icon: TrendingUp,
      iconBg: 'rgba(37, 195, 95, 0.17)',
      iconColor: '#25C35F',
      label: 'Liability SquadCo (0.025%)',
      value: 'N75.860',
      details: []
    },
    {
      id: 6,
      icon: CreditCard,
      iconBg: 'rgba(193, 61, 138, 0.17)',
      iconColor: '#C13D8A',
      label: 'External Transfer Fees',
      value: 'N125,000',
      details: []
    },
  ];

  const StatCard = ({ icon: Icon, iconBg, iconColor, label, value, details }) => (
    <div className="w-full sm:w-[calc(50%-8px)] md:w-[calc(50%-10px)] lg:w-[calc(33.333%-27px)] xr:w-[400px] min-w-0 bg-white rounded-xl sm:rounded-2xl shadow-[0px_8px_16px_-4px_rgba(12,12,13,0.08),0px_2px_4px_-2px_rgba(12,12,13,0.04)] sm:shadow-[0px_16px_32px_-4px_rgba(12,12,13,0.1),0px_4px_4px_-4px_rgba(12,12,13,0.05)] px-3 sm:px-4 md:px-5 py-3 sm:py-4 md:py-5 transition-all duration-200 hover:shadow-[0px_20px_40px_-4px_rgba(12,12,13,0.15)] hover:scale-[1.02] active:scale-[0.98] ">
      <div className="flex items-start gap-2 sm:gap-2.5 md:gap-3 w-full">
        {/* Icon Container */}
        <div 
          className="w-[38px] h-[38px] sm:w-[42px] sm:h-[42px] md:w-[50px] md:h-[50px] rounded flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: iconBg }}
        >
          <Icon 
            size={24} 
            className="sm:w-7 sm:h-7 md:w-8 md:h-8" 
            style={{ color: iconColor }} 
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-0.5 sm:gap-1 md:gap-1.5 min-w-0 flex-1">
          <span className="text-[11px] sm:text-xs md:text-sm font-medium text-[#5C5A5A] leading-tight line-clamp-2">
            {label}
          </span>
          <span className="text-sm sm:text-base md:text-lg font-medium text-[#212121] leading-tight truncate">
            {value}
          </span>
          
          {/* Details - for cards with breakdown */}
          {details && details.length > 0 && (
            <div className="flex flex-col gap-0.5 mt-0.5 sm:mt-1">
              {details.map((detail, index) => (
                <div key={index} className="text-[8px] sm:text-[9px] md:text-[10px] font-light text-[#5C5A5A] leading-tight truncate">
                  <span className="font-normal">{detail.label}</span> {detail.value}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full min-h-screen bg-gray-50/30">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-[124px] pb-6 sm:pb-8 md:pb-10">
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
          {/* First Row - Cards with details */}
          <div className="flex flex-wrap gap-2.5 sm:gap-3 md:gap-5 lg:gap-8 xl:gap-10">
            {statsRow1.map((stat) => (
              <StatCard key={stat.id} {...stat} />
            ))}
          </div>

          {/* Second Row - Simple cards */}
          <div className="flex flex-wrap gap-2.5 sm:gap-3 md:gap-5 lg:gap-8 xl:gap-10">
            {statsRow2.map((stat) => (
              <StatCard key={stat.id} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;