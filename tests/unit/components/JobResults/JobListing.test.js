import { render, screen } from "@testing-library/vue";
import { RouterLinkStub } from "@vue/test-utils";
import JobListing from "@/components/JobResults/JobListing.vue";

describe("JobListing", () => {
  const createJobProps = (jobProps = {}) => ({
    title: "Vue Developer",
    organization: "Vue Lovers",
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

    const jobTitle = screen.getByText("React Developer");
    expect(jobTitle).toBeInTheDocument();
  });

  it("renders job organization", () => {
    const jobProps = createJobProps();
    renderJobListing(jobProps);

    const jobOrganization = screen.getByText("Vue Lovers");
    expect(jobOrganization).toBeInTheDocument();
  });
});
