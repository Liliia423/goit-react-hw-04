{
  /*import { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

import Modal from "react-modal";
Modal.setAppElement("#root");

import "./App.css";

const ACCESS_KEY = "6zFA-vdlgqMqQyQVZTbE16l_UAumbiYLaDv-uSJ2rfE";
const BASE_URL = "https://api.unsplash.com/search/photos";

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [showToaster, setShowToaster] = useState(false);

  useEffect(() => {
    if (!query) return;

    async function fetchImages() {
      try {
        setIsLoading(true);
        setError(null);

        const response = await axios.get(BASE_URL, {
          params: {
            query: query,
            page: page,
            per_page: 15,
            client_id: ACCESS_KEY,
          },
        });

        if (response.data.results.length === 0) {
          setShowToaster(true);
          toast.error("Sorry, no images found. Try a different search.");
          return;
        }

        setImages((prevImages) =>
          page === 1
            ? response.data.results
            : [...prevImages, ...response.data.results]
        );
      } catch (err) {
        setError(`An error occurred while fetching images: ${err.message}`);
        setShowToaster(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchImages();
  }, [query, page]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleImageClick = (imageData) => {
    setModalImage(imageData);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalImage(null);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {showModal && modalImage && (
        <ImageModal
          image={modalImage}
          isOpen={showModal}
          onClose={handleCloseModal}
        />
      )}

      {showToaster && (
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#3C7630",
              color: "#fff",
              fontSize: "16px",
              borderRadius: "4px",
              textAlign: "left",
            },
            duration: 5000,
          }}
        />
      )}
    </>
  );
}

export default App;*/
}

{
  /*import { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

import "./App.css";

import Modal from "react-modal";
Modal.setAppElement("#root");

const ACCESS_KEY = "6zFA-vdlgqMqQyQVZTbE16l_UAumbiYLaDv-uSJ2rfE";
const BASE_URL = "https://api.unsplash.com/search/photos";

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalImage, setModalImage] = useState(null);
  const [showToaster, setShowToaster] = useState(false);

  useEffect(() => {
    if (!query) return;

    async function fetchImages() {
      try {
        setIsLoading(true);
        setError(null);

        const response = await axios.get(BASE_URL, {
          params: {
            query,
            page,
            per_page: 15,
            client_id: ACCESS_KEY,
          },
        });

        if (response.data.results.length === 0) {
          setShowToaster(true);
          toast.error("Sorry, no images found. Try a different search.");
          return;
        }

        setImages((prevImages) =>
          page === 1
            ? response.data.results
            : [...prevImages, ...response.data.results]
        );
      } catch (err) {
        setError(`An error occurred while fetching images: ${err.message}`);
        setShowToaster(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchImages();
  }, [query, page]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleImageClick = (imageData) => {
    setModalImage(imageData);
  };

  const handleCloseModal = () => {
    setModalImage(null);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {modalImage && (
        <ImageModal
          image={modalImage}
          isOpen={Boolean(modalImage)}
          onClose={handleCloseModal}
        />
      )}
      {showToaster && (
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#3C7630",
              color: "#fff",
              fontSize: "16px",
              borderRadius: "4px",
              textAlign: "left",
            },
            duration: 5000,
          }}
        />
      )}
    </>
  );
}

export default App;*/
}
import { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

import "./App.css";

const ACCESS_KEY = "6zFA-vdlgqMqQyQVZTbE16l_UAumbiYLaDv-uSJ2rfE";
const BASE_URL = "https://api.unsplash.com/search/photos";

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalImage, setModalImage] = useState(null);
  const [showToaster, setShowToaster] = useState(false);

  useEffect(() => {
    if (!query) return;

    async function fetchImages() {
      try {
        setIsLoading(true);
        setError(null);

        const response = await axios.get(BASE_URL, {
          params: {
            query,
            page,
            per_page: 15,
            client_id: ACCESS_KEY,
          },
        });

        if (response.data.results.length === 0) {
          setShowToaster(true);
          toast.error("Sorry, no images found. Try a different search.");
          return;
        }

        setImages((prevImages) =>
          page === 1
            ? response.data.results
            : [...prevImages, ...response.data.results]
        );
      } catch (err) {
        setError(`An error occurred while fetching images: ${err.message}`);
        setShowToaster(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchImages();
  }, [query, page]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleImageClick = (image) => {
    setModalImage(image);
  };

  const handleCloseModal = () => {
    setModalImage(null);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {modalImage && (
        <ImageModal
          image={modalImage}
          isOpen={Boolean(modalImage)}
          onClose={handleCloseModal}
        />
      )}
      {showToaster && (
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#3C7630",
              color: "#fff",
              fontSize: "16px",
              borderRadius: "4px",
              textAlign: "left",
            },
            duration: 5000,
          }}
        />
      )}
    </>
  );
}

export default App;
