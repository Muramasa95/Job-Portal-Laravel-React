import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import NotFoundPage from "./pages/NotFoundPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";
import { JobInterface } from "./components/JobListing";

const App = () => {
    // Add Job
    const addJob = async (newJob: unknown) => {
        await fetch("/api/jobs/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newJob),
        });
        return;
    };

    // Delete Job
    const deleteJob = async (id: string) => {
        await fetch(`/api/jobs/${id}`, {
            method: "DELETE",
        });
        return;
    };

    // Edit Job
    const updateJob = async (job: JobInterface) => {
        if (!job.id) {
            throw new Error("Job ID is required to update the job.");
        }

        await fetch(`/api/jobs/${job.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(job),
        });
        return;
    };

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/jobs" index element={<JobsPage />} />
                <Route
                    path="/jobs/:id"
                    element={<JobPage deleteJob={deleteJob} />}
                    loader={jobLoader}
                />
                <Route
                    path="/edit-jobs/:id"
                    element={<EditJobPage updateJobSubmit={updateJob} />}
                    loader={jobLoader}
                />
                <Route
                    path="/add-job"
                    index
                    element={<AddJobPage addJobSubmit={addJob} />}
                />
                <Route path="/*" index element={<NotFoundPage />} />
            </Route>
        )
    );

    return <RouterProvider router={router} />;
};

export default App;
