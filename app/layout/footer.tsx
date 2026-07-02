
export default function Footer() {
  return (
    <footer className="bg-purple-300 border-t border-black-900 p-4 text-center text-sm text-red-900 mt-auto">
      &copy; {new Date().getFullYear()} COEL-Inc. All Rights Reserved.
    </footer>
  );
}