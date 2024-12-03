import React from 'react';

function Breadcumb({ items }) {
  return (
    <div>
      <nav className="flex m-6 float-right" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          {items.map((item, index) => (
            <li
              key={index}
              className={`inline-flex items-center ${
                index === items.length - 1 ? '' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {index !== 0 && (
                <svg
                  className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              )}
              {item.link ? (
                <a
                  href={item.link}
                  className="inline-flex items-center text-sm font-medium"
                >
                  {item.icon && (
                    <svg
                      className="w-3 h-3 me-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d={item.icon} />
                    </svg>
                  )}
                  {item.label}
                </a>
              ) : (
                <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}

export default Breadcumb;
