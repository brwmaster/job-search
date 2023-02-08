import { render, screen } from "@testing-library/vue";
import { RouterLinkStub } from "@vue/test-utils";
import JobListing from "@/components/JobResults/JobListing.vue";

describe("JobListing", () => {
  const createJobProps = (jobProps = {}) => ({
    title: "Vue Developer",
    organization: "Vue Lovers",
    locations: ["Rotterdam", "Berlin"],
    minimumQualifications: ["10 years experience", "Typescript", "Vitest"],
    ...jobProps,
  });

  const renderJobListing = (jobProps) => {
    render(JobListing, {
      global: {
        stubs: {
          "router-link": RouterLinkStub,
        },
      },
      props: {
        job: {
          ...jobProps,
        },
      },
    });
  };

  it("renders job title", () => {
    const jobProps = createJobProps({ title: "React Developer" });
    renderJobListing(jobProps);

    expect(screen.getByText("React Developer")).toBeInTheDocument();
  });

  it("renders job organization", () => {
    const jobProps = createJobProps();
    renderJobListing(jobProps);

    expect(screen.getByText("Vue Lovers")).toBeInTheDocument();
  });

  it("renders job locations", () => {
    const jobProps = createJobProps({ locations: ["Amsterdam", "Londen"] });

    renderJobListing(jobProps);

    expect(screen.getByText("Amsterdam")).toBeInTheDocument();
    expect(screen.getByText("Londen")).toBeInTheDocument();
  });

  it("renders job qualifications", () => {
    const jobProps = createJobProps({
      minimumQualifications: ["5 years experience", "Develop", "Code"],
    });

    renderJobListing(jobProps);

    expect(screen.getByText("5 years experience")).toBeInTheDocument();
    expect(screen.getByText("Develop")).toBeInTheDocument();
    expect(screen.getByText("Code")).toBeInTheDocument();
  });
});
