interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'dark';
  id?: string;
}

const backgroundClasses = {
  white: 'bg-white',
  gray: 'bg-gray-50',
  dark: 'bg-gray-900 text-white',
};

export default function Section({ children, className = '', background = 'white', id }: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${backgroundClasses[background]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
