export function Logo() {
  return (
    <div className="flex items-center gap-3">
      {/* Logo Icon - House + Heart */}
      <div className="relative w-12 h-12">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* House/Roof - Golden Sand */}
          <path
            d="M50 10 L85 40 L85 85 L15 85 L15 40 Z"
            fill="#D4AF37"
            opacity="0.9"
          />
          {/* Heart Shape - Deep Celadon */}
          <path
            d="M50 75 C50 75, 30 55, 30 42 C30 32, 38 28, 43 28 C47 28, 50 32, 50 32 C50 32, 53 28, 57 28 C62 28, 70 32, 70 42 C70 55, 50 75, 50 75 Z"
            fill="#7FB394"
          />
        </svg>
      </div>
      
      {/* Brand Name */}
      <div className="flex flex-col">
        <span className="text-2xl font-semibold text-primary">
          Evercare
        </span>
        <span className="text-sm text-muted-foreground">
          Nursing Home
        </span>
      </div>
    </div>
  );
}
