import { useAuth } from '../hooks/context';

const PrivacyModal = () => {
    
    const auth = useAuth();
  const hideModal = () => auth.setIsPrivacyModalOpen(false);
  const confirmAndClose = () => {
    auth.setProceed(true);
    auth.handlePrivacyConfirmation();
    hideModal();
  };

  if (!auth.isPrivacyModalOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 text-center">
        <div
          className="inline-block w-full max-w-lg p-8 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
        >
          <h3 className="text-lg font-medium leading-6 text-gray-900">Privacy info</h3>
          <div className="mt-2">
            <p className="text-sm text-gray-500">
              The backup created with this export functionality may contain some sensitive data. We suggest you to save this archive in a secured location.
            </p>
          </div>
          <div className="mt-4">
            <button
              type="button"
              className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-transparent rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500"
              onClick={hideModal}
            >
              Cancel
            </button>
            <button
              type="button"
              className="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
              onClick={confirmAndClose}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyModal;
