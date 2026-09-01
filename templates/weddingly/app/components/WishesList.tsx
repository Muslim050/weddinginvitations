import { useState, useEffect } from "react";
import { IoMdRefresh } from "react-icons/io";
import { useUi, useLang, formatDateTime } from "@/lib/i18n";

interface Wish {
  _id: string;
  name: string;
  attendance: string;
  guests: number;
  message: string;
  createdAt: string;
}

const WishesList = () => {
  const t = useUi();
  const [lang] = useLang();
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false); // Add loading state

  const fetchWishes = async (pageNumber: number) => {
    setLoading(true); // Set loading to true when fetching
    try {
      const response = await fetch(`/api/get?page=${pageNumber}&limit=5`);
      if (!response.ok) {
        throw new Error(`Error fetching wishes: ${response.statusText}`);
      }

      const data = await response.json();
      setWishes(data.wishes);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Error fetching wishes:", error);
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  useEffect(() => {
    fetchWishes(page);
  }, [page]);

  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleRefresh = () => {
    fetchWishes(page); // Re-fetch the current page
  };

  return (
    <div className="bg-black/50 text-white p-4 rounded-md mt-5">
      <div className="flex justify-end mb-4">
        <button
          onClick={handleRefresh}
          className={`text-sm text-white ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading} // Disable while loading
        >
          {loading ? t.wishes.refreshing : <IoMdRefresh className="w-6 h-6" />}
        </button>
      </div>

      <div className="max-h-[500px] overflow-y-auto">
        {wishes.length === 0 ? (
          <p>{t.wishes.empty}</p>
        ) : (
          wishes.map((wish) => (
            <div key={wish._id} className="mb-4">
              <p className="font-bold font-legan">{wish.name}</p>
              <p className="text-sm my-2 opacity-50">
                {formatDateTime(lang, wish.createdAt)}
              </p>
              <p className="text-sm">{wish.message}</p>
              <hr className="my-2 border-gray-400" />
            </div>
          ))
        )}
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={handlePreviousPage}
          className={`text-xs text-white ${
            page === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={page === 1}
        >
          {t.wishes.prev}
        </button>
        <p className="text-xs">
          {t.wishes.page} {page} {t.wishes.of} {totalPages}
        </p>
        <button
          onClick={handleNextPage}
          className={`text-xs text-white ${
            page === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={page === totalPages}
        >
          {t.wishes.next}
        </button>
      </div>
    </div>
  );
};

export default WishesList;
