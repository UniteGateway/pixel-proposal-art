import { createContext, useContext, useState, ReactNode } from "react";
import { Smartphone, Tablet, Monitor } from "lucide-react";
import { motion } from "framer-motion";

type DeviceType = "mobile" | "tablet" | "desktop";

interface DeviceContextType {
  device: DeviceType;
  setDevice: (device: DeviceType) => void;
}

const DeviceContext = createContext<DeviceContextType | undefined>(undefined);

export const useDevice = () => {
  const context = useContext(DeviceContext);
  if (!context) {
    throw new Error("useDevice must be used within DeviceProvider");
  }
  return context;
};

export const DeviceProvider = ({ children }: { children: ReactNode }) => {
  const [device, setDevice] = useState<DeviceType>("desktop");

  return (
    <DeviceContext.Provider value={{ device, setDevice }}>
      {children}
    </DeviceContext.Provider>
  );
};

interface DeviceSelectorProps {
  scrolled?: boolean;
}

export const DeviceSelector = ({ scrolled = false }: DeviceSelectorProps) => {
  const { device, setDevice } = useDevice();

  const devices = [
    { id: "mobile" as DeviceType, icon: Smartphone, label: "Mobile" },
    { id: "tablet" as DeviceType, icon: Tablet, label: "Tablet" },
    { id: "desktop" as DeviceType, icon: Monitor, label: "Desktop" },
  ];

  return (
    <div className={`flex items-center gap-1 p-1 rounded-full ${scrolled ? "bg-secondary" : "bg-primary-foreground/10"}`}>
      {devices.map((d) => (
        <button
          key={d.id}
          onClick={() => setDevice(d.id)}
          className={`relative p-2 rounded-full transition-all ${
            device === d.id
              ? "text-gold"
              : scrolled
                ? "text-muted-foreground hover:text-foreground"
                : "text-primary-foreground/60 hover:text-primary-foreground"
          }`}
          title={d.label}
        >
          {device === d.id && (
            <motion.div
              layoutId="device-indicator"
              className="absolute inset-0 bg-gold/20 rounded-full"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          <d.icon className="w-4 h-4 relative z-10" />
        </button>
      ))}
    </div>
  );
};

interface DeviceFrameProps {
  children: ReactNode;
}

export const DeviceFrame = ({ children }: DeviceFrameProps) => {
  const { device } = useDevice();

  const getDeviceStyles = () => {
    switch (device) {
      case "mobile":
        return "max-w-[375px] mx-auto";
      case "tablet":
        return "max-w-[768px] mx-auto";
      case "desktop":
      default:
        return "w-full";
    }
  };

  return (
    <div className={`transition-all duration-500 ${getDeviceStyles()}`}>
      {device !== "desktop" && (
        <div className="hidden md:block text-center py-4 text-sm text-muted-foreground">
          Viewing in <span className="text-gold font-medium capitalize">{device}</span> mode
        </div>
      )}
      {children}
    </div>
  );
};
