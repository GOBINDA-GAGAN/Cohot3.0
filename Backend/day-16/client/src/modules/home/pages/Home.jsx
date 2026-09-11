
import Button from "../../../components/ui/Button";
export default function Home() {
  return (
    <div>
      <img src="" alt="" srcset="" />

      <div className="flex items-center justify-center gap-4">
        <Button variant="primary" size="lg">
          Login
        </Button>
        <Button variant="secondary" size="lg" className="bg-gray-200 text-gray-800 hover:bg-gray-300">
          Register
        </Button>
      </div>
    </div>
  );
}
