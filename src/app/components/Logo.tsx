import logo from "../assets/Logo.png";

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      {/* Logo Image */}
      <div style={{ width: '150px' }}>
        <img 
          src={logo}
          alt="Evercare Logo"
        />
      </div>
    </div>
  );
}