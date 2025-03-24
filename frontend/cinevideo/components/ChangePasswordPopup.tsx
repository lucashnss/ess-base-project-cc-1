import { X } from "lucide-react";
import Logo from "@/components/Logo";
import Button from "@/components/Button";
import Input from "@/components/Input";

interface ChangePasswordPopupProps {
  onClose: () => void;
}

export default function ChangePasswordPopup({ onClose }: ChangePasswordPopupProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <div className="flex justify-between items-center mb-4">
          <Logo />
          <button onClick={onClose} className="text-gray-600">
            <X className="w-6 h-6" />
          </button>
        </div>
        <Input type="password" placeholder="Senha atual" />
        <Input type="password" placeholder="Nova senha" />
        <Input type="password" placeholder="Confirme sua nova senha" />
        <Button className="w-full mt-4">Trocar senha</Button>
      </div>
    </div>
  );
}