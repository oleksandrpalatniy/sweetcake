interface RatingProps {
    value: number;
  }
  
  export default function Rating({ value }: RatingProps) {
    return (
      <div className="flex items-center gap-1">
        <span className="text-yellow-500">★</span>
  
        <span className="text-sm font-medium">
          {value.toFixed(1)}
        </span>
      </div>
    );
  }